/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Container, FormControl, Grid, InputLabel, Select, TextField} from "@material-ui/core";
import {Fragment, useEffect, useState} from "react";
import ProfileStyle from '../../ProfileStyle'
import {convertDateTime} from "../../../../utils/dateFormat/DateTimeFormatToDateWord";
import {convertToYYMMDD} from "../../../../utils/dateFormat/DateFormatYYMMDD";
import Button from "@material-ui/core/Button";
import {deleteToS3, uploadToS3} from "../../../../../../store/middleware/utils/S3bukcet/s3";
import {baseUrl, baseUrlNoAuth} from "../../../../../../store/middleware/axios";
import {updateAccount} from "../../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import {compareBCrypt, PasswordEncrypt} from "../../../../../../store/middleware/utils/EncryptPassword";
import {checkPasswordStrength, checkStringEmail, checkStringEmpty} from "../../../../utils/validation";

export default function Data({
                                 student,
                                 translation,
                                 cancel,
                                 update,
                                 canUpdate,
                                 photo,
                                 getProfileData
                             }) {
    const style = ProfileStyle()


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthdate, setBirthDate] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [middleName,setMiddleName] = useState('')

    // setting new password
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [reTypeNewPassword, setReTypePassword] = useState('')

    console.log(student)
    useEffect(() => {
        setFirstName(student.user.firstName)
        setLastName(student.user.lastName)
        setBirthDate(student.user.birthdate)
        setEmail(student.user.email)
        setGender(student.user.gender)
        setMiddleName(student.user.middleName)
        setCurrentPassword('')
        setNewPassword('')
        setReTypePassword('')
    }, [update])

    // error
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [newPasswordError, setNewPasswordError] = useState(false)
    const [reTypePasswordError, setReTypePasswordError] = useState(false)
    const [currentPasswordError, setCurrentPasswordError] = useState(false)


    // error message
    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState('')
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [reTypePasswordErrorMessage, setReTypePasswordErrorMessage] = useState('')
    const [currentPasswordErrorMessage, setCurrentPasswordErrorMessage] = useState('')
    const [newPasswordErrorMessage, setNewPasswordErrorMessage] = useState('')


    const saveProfileClick = async () => {
        reset()
        let currentPhoto = student.user.picture
        const match = await compareBCrypt(student.user.password, currentPassword)

        let error = false

        if (checkStringEmpty(firstName)) {
            error = true
            setFirstNameError(true)
            setFirstNameErrorMessage('Please Input A Value')
        }

        if (checkStringEmpty(lastName)) {
            error = true
            setLastNameError(true)
            setLastNameErrorMessage('Please Input A Value')
        }


        if (checkStringEmpty(email)) {
            setEmailError(true)
            setEmailErrorMessage('Please Input A Value')
            error = true
        } else if (!checkStringEmail(email)) {
            setEmailError(true)
            setEmailErrorMessage('Please Input A Valid Email')
            error = true
        } else if (email !== student.user.email) {
            const params = new URLSearchParams()
            params.append("email", email.toString())
            try {
                await baseUrlNoAuth.get('user', {params})
            } catch (ignored) {
                error = true
                setEmailError(true)
                setEmailErrorMessage("Email Already Exist")
            }
        }


        if (currentPassword !== '' && match === false) {
            setCurrentPasswordError(true)
            setCurrentPasswordErrorMessage("Incorrect  Password")
            error = true
        }

        if (match === false && (newPassword !== '' || reTypeNewPassword !== '') && newPassword === reTypeNewPassword) {
            setCurrentPasswordError(true)
            setCurrentPasswordErrorMessage("Need A Current Password")
            error = true
        }

        if (currentPassword !== '' && (newPassword !== '' && reTypeNewPassword !== '')) {
            if (match === false) {
                setCurrentPasswordError(true)
                setCurrentPasswordErrorMessage("Incorrect  Password")
                error = true
            } else if (newPassword !== reTypeNewPassword) {
                setNewPasswordError(true)
                setReTypePasswordError(true)

                setReTypePasswordErrorMessage("Password Not Match")
                setNewPasswordErrorMessage("Password Not Match")
                error = true
            } else if (checkPasswordStrength(newPassword) === false) {
                error = true
                setNewPasswordError(true)
                setNewPasswordErrorMessage('Password Should Contain 8 Characters, One Upper Case, One Lower Case, One Digit')
            }
        }

        if (error === true) return;

        if (currentPhoto !== photo && currentPhoto !== '') {
            await deleteToS3(currentPhoto)
            currentPhoto = await uploadToS3(photo)
        } else if (currentPhoto === '' && photo !== '') {
            currentPhoto = await uploadToS3(photo)
        }


        // console.log(birthdate)

        const params = new URLSearchParams();
        const password = newPassword === '' ? student.user.password : await PasswordEncrypt(newPassword)

        params.append("email", email)
        params.append("firstName", firstName)
        params.append("lastName", lastName)
        params.append("picture", currentPhoto)
        params.append("birthdate", birthdate)
        params.append("id", student.user.id)
        params.append("password", password)
        params.append('gender', gender)
        params.append('middleName', middleName)


        await baseUrl.post(updateAccount, params).then(ignored => {
            if (email !== student.user.email || newPassword !== '') {
                alert("redirecting to login page")
                localStorage.clear()
                window.location.reload()
            }
            alert("Update User Success")
            getProfileData()
        }).catch(error => {
            console.log(error)
        })

    }

    const reset = () => {
        setCurrentPasswordError(false)
        setReTypePasswordError(false)
        setEmailError(false)
        setNewPasswordError(false)
        setLastNameError(false)
        setFirstNameError(false)

        setCurrentPasswordErrorMessage('')
        setReTypePasswordErrorMessage('')
        setEmailErrorMessage('')
        setNewPasswordErrorMessage('')
        setLastNameErrorMessage('')
        setFirstNameErrorMessage('')
    }


    const changePassword = (data) => {
        setCurrentPassword(data)
        setCurrentPasswordError(false)
        setCurrentPasswordErrorMessage('')
    }

    const changeNewPassword = (data) => {
        setNewPassword(data)
        setNewPasswordError(false)
        setNewPasswordErrorMessage('')
    }

    const changeRetypePassword = (data) => {
        setReTypePassword(data)
        setReTypePasswordError(false)
        setReTypePasswordErrorMessage('')
    }

    const changeEmail = (data) => {
        setEmailError(false)
        setEmailErrorMessage('')
        setEmail(data)
    }

    const changeName = (data) => {
        setFirstName(data)
        setFirstNameErrorMessage('')
        setFirstNameError(false)
    }

    const changeLastName = (data) => {
        setLastName(data)
        setLastNameErrorMessage('')
        setLastNameError(false)
    }


    return (
        <Fragment>
            <h1 className={style.profileName}>
                {translation.language["label.global.student.information"]}
            </h1>
            <Grid component={Container} container>
                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.first.name"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            {
                                update ?
                                    <TextField
                                        error={firstNameError}
                                        helperText={firstNameErrorMessage}
                                        variant="outlined"
                                        margin={'dense'}
                                        label={translation.language["label.global.first.name"]}
                                        value={firstName}
                                        autoFocus={true}
                                        onChange={(e) => changeName(e.target.value)}
                                    />
                                    :
                                    <p>{student.user.firstName}</p>
                            }
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.last.name"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            {
                                update ?
                                    <TextField
                                        error={lastNameError}
                                        helperText={lastNameErrorMessage}
                                        variant="outlined"
                                        margin={'dense'}
                                        label={translation.language["label.global.last.name"]}
                                        value={lastName}
                                        onChange={(e) => changeLastName(e.target.value)}
                                    />
                                    :
                                    <p>{student.user.lastName}</p>
                            }
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.middle.name"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            {
                                update ?
                                    <TextField
                                        variant="outlined"
                                        margin={'dense'}
                                        label={translation.language["label.global.middle.name"]}
                                        value={middleName}
                                        onChange={(e) => setMiddleName(e.target.value)}
                                    />
                                    :
                                    <p>{student.user.middleName}</p>
                            }
                        </Grid>
                    </Grid>
                </Grid>

                {
                    update ? null :
                        <Grid container>
                            <Grid md={9} xs={6} item>
                                <h2>{translation.language["label.global.grade.section"]}</h2>
                            </Grid>

                            <Grid md={3} xs={6} item>
                                <Grid container justify="flex-end">
                                    {
                                        student.roomShifts.length === 0 ?
                                            <p>{translation.language['label.global.tba']}</p> :
                                            <p>{`${student.roomShifts[0].grade} - ${student.roomShifts[0].section}`}</p>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                }

                {
                    update ? null :
                        <Grid container>
                            <Grid md={9} xs={6} item>
                                <h2>{translation.language["label.global.account.registered"]}: </h2>
                            </Grid>

                            <Grid md={3} xs={6} item>
                                <Grid container justify="flex-end">
                                    <p>{convertDateTime(student.user.createdAt)}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                }

                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.email"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            {
                                update ?
                                    <TextField
                                        error={emailError}
                                        helperText={emailErrorMessage}
                                        variant="outlined"
                                        margin={'dense'}
                                        type={'text'}
                                        label={translation.language["label.global.email"]}
                                        value={email}
                                        onChange={(e) => changeEmail(e.target.value)}
                                    /> : <p>{student.user.email}</p>
                            }
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.gender"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            {
                                update ?
                                    <FormControl variant="outlined" margin='dense'>
                                        <InputLabel
                                            htmlFor={translation.language["label.global.gender"]}>{translation.language["label.global.gender"]}</InputLabel>
                                        <Select
                                            fullWidth
                                            native
                                            value={gender}
                                            label={translation.language["label.global.gender"]}
                                            inputProps={{
                                                name: translation.language["label.global.gender"],
                                                id: translation.language["label.global.gender"],
                                            }}
                                            onChange={(event => setGender(event.target.value))}
                                        >
                                            <option
                                                value={translation.language["label.global.male"]}>{translation.language["label.global.male"]}</option>
                                            <option
                                                value={translation.language["label.global.female"]}>{translation.language["label.global.female"]}</option>
                                        </Select>
                                    </FormControl>
                                    : <p>{student.user.gender}</p>
                            }
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.birth.date"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            {
                                update ?
                                    <TextField variant="outlined"
                                               margin={'dense'}
                                               type='date'
                                               label={translation.language["label.global.birth.date"]}
                                               value={convertToYYMMDD(birthdate)}
                                               onChange={(e) => setBirthDate(e.target.value)}
                                    />
                                    :
                                    <p>{convertDateTime(student.user.birthdate)}</p>
                            }
                        </Grid>
                    </Grid>
                </Grid>

                {
                    update ?
                        <Grid container>
                            <Grid md={9} xs={12} item>
                                <h2>{translation.language["label.global.current.password"]}: </h2>
                            </Grid>

                            <Grid md={3} xs={12} item>
                                <Grid container justify="flex-end">
                                    <TextField
                                        error={currentPasswordError}
                                        helperText={currentPasswordErrorMessage}
                                        variant="outlined"
                                        margin={'dense'}
                                        label={translation.language["label.global.current.password"]}
                                        value={currentPassword}
                                        onChange={(e) => changePassword(e.target.value)}
                                        type={'password'}
                                    />
                                </Grid>
                            </Grid>
                        </Grid> : null
                }

                {
                    update ? <Grid container>
                        <Grid md={9} xs={6} item>
                            <h2>{translation.language["label.global.new.password"]}: </h2>
                        </Grid>

                        <Grid md={3} xs={6} item>
                            <Grid container justify="flex-end">
                                <TextField
                                    error={newPasswordError}
                                    helperText={newPasswordErrorMessage}
                                    variant="outlined"
                                    margin={'dense'}
                                    label={translation.language["label.global.new.password"]}
                                    value={newPassword}
                                    onChange={(e) => changeNewPassword(e.target.value)}
                                    type={'password'}
                                />
                            </Grid>
                        </Grid>
                    </Grid> : null
                }

                {
                    update ? <Grid container>
                        <Grid md={9} xs={6} item>
                            <h2>{translation.language["label.global.retype.password"]}: </h2>
                        </Grid>

                        <Grid md={3} xs={6  } item>
                            <Grid container justify="flex-end">
                                <TextField
                                    error={reTypePasswordError}
                                    helperText={reTypePasswordErrorMessage}
                                    variant="outlined"
                                    margin={'dense'}
                                    label={translation.language["label.global.retype.password"]}
                                    value={reTypeNewPassword}
                                    onChange={(e) => changeRetypePassword(e.target.value)}
                                    type={'password'}
                                />
                            </Grid>
                        </Grid>
                    </Grid> : null
                }

                <Grid container>
                    <Grid md={9} xs={6} item>
                        <p></p>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            {
                                canUpdate && update ?
                                    <Fragment>
                                        <Button variant="contained"
                                                color="secondary"
                                                onClick={cancel}
                                                className={style.button}>{translation.language["label.button.cancel"]}
                                        </Button>
                                        <Button variant="contained"
                                                color="primary"
                                                onClick={saveProfileClick}
                                                className={style.button}>{translation.language["label.button.update"]}
                                        </Button>
                                    </Fragment> : null
                            }
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </Fragment>
    )
}