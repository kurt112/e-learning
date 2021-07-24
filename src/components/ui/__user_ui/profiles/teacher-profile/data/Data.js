/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Box, Container, TextField, Typography} from "@material-ui/core";
import {Fragment, useState} from "react";
import ProfileStyle from '../../ProfileStyle'
import {convertDateTime} from "../../../../utils/dateFormat/DateTimeFormatToDateWord";
import Button from "@material-ui/core/Button";
import {convertToYYMMDD} from "../../../../utils/dateFormat/DateFormatYYMMDD";
import {deleteToS3, uploadToS3} from "../../../../../../store/middleware/utils/S3bukcet/s3";
import {baseUrl} from "../../../../../../store/middleware/axios";
import {updateAccount} from "../../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";

const Data = ({
                  teacher,
                  translation,
                  cancel,
                  update,
                  canUpdate,
                  photo,
                  getProfileData
              }) => {
    const style = ProfileStyle()

    const [firstName, setFirstName] = useState(teacher.user.firstName)
    const [lastName, setLastName] = useState(teacher.user.lastName)
    const [birthdate, setBirthDate] = useState(teacher.user.birthdate)
    const [email, setEmail] = useState(teacher.user.email)

    // setting new password
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [reTypeNewPassword, setReTypePassword] = useState('')

    const saveProfileClick = async () => {
        let currentPhoto = teacher.user.picture

        if(currentPassword !== '' || newPassword !== '' || reTypeNewPassword !==''){

            if(currentPassword !== teacher.user.password){
                alert("Password Not Match")
                return
            }

            if(newPassword !== reTypeNewPassword){
                alert("Password Does Not Match")
                return;
            }

        }

        if (currentPhoto !== photo && currentPhoto !== '') {
            await deleteToS3(currentPhoto)
            currentPhoto = await uploadToS3(photo)
        } else if (currentPhoto === '') {
            currentPhoto = await uploadToS3(photo)
        }


        // console.log(birthdate)

        const params = new URLSearchParams();
        const password = newPassword ===''? teacher.user.password: newPassword

        params.append("email", email)
        params.append("firstName", firstName)
        params.append("lastName", lastName)
        params.append("picture", currentPhoto)
        params.append("birthdate", birthdate)
        params.append("id", teacher.user.id)
        params.append("password",password)


        await baseUrl.post(updateAccount, params).then(ignored => {
            if (email !== teacher.user.email || newPassword !== '') {
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


    return (
        <Fragment>
            <Typography className={style.profileName} variant="h4" component="h2">Personal Information</Typography>
            <Container>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.first.name"]}: </p>
                    </Box>
                    {
                        update ?
                            <TextField variant="outlined"
                                       margin={'dense'}
                                       label={translation.language["label.global.first.name"]}
                                       value={firstName}
                                       autoFocus={true}
                                       onChange={(e) => setFirstName(e.target.value)}
                            />
                            :
                            <p>{teacher.user.firstName}</p>
                    }
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.last.name"]}: </p>
                    </Box>
                    {
                        update ?
                            <TextField variant="outlined"
                                       margin={'dense'}
                                       label={translation.language["label.global.last.name"]}
                                       value={lastName}
                                       onChange={(e) => setLastName(e.target.value)}
                            />
                            :
                            <p>{teacher.user.lastName}</p>
                    }
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.birth.date"]}:</p>
                    </Box>
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
                            <p>{convertDateTime(teacher.user.birthdate)}</p>
                    }

                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.email"]}: </p>
                    </Box>
                    {
                        update ? <TextField variant="outlined"
                                            margin={'dense'}
                                            type={'text'}
                                            label={translation.language["label.global.email"]}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                        /> : <p>{teacher.user.email}</p>
                    }
                </Box>
                {
                    update === false ?
                        <Box className={style.profileDataContainer}>
                            <Box className={style.profileDataContainerTitle}>
                                <p>{translation.language["label.global.account.registered"]}:</p>
                            </Box>
                            <p>{convertDateTime(teacher.user.createdAt)}</p>
                        </Box> : null
                }

                {
                    update === false ?
                        <Box className={style.profileDataContainer}>
                            <Box className={style.profileDataContainerTitle}>
                                <p>{translation.language["label.global.account.registered"]}:</p>
                            </Box>
                            <p>{convertDateTime(teacher.user.createdAt)}</p>
                        </Box> : null
                }


                {
                    update ? <Box className={style.profileDataContainer}>
                        <Box className={style.profileDataContainerTitle}>
                            <p>{translation.language["label.global.current.password"]}: </p>
                        </Box>
                        <TextField variant="outlined"
                                   margin={'dense'}
                                   label={translation.language["label.global.current.password"]}
                                   value={currentPassword}
                                   onChange={(e) => setCurrentPassword(e.target.value)}
                                   type={'password'}
                        />
                    </Box> : null
                }

                {
                    update ? <Box className={style.profileDataContainer}>
                        <Box className={style.profileDataContainerTitle}>
                            <p>{translation.language["label.global.new.password"]}: </p>
                        </Box>
                        <TextField variant="outlined"
                                   margin={'dense'}
                                   label={translation.language["label.global.new.password"]}
                                   value={newPassword}
                                   onChange={(e) => setNewPassword(e.target.value)}
                                   type={'password'}
                        />
                    </Box>:null
                }

                {
                    update?<Box className={style.profileDataContainer}>
                        <Box className={style.profileDataContainerTitle}>
                            <p>{translation.language["label.global.retype.password"]}: </p>
                        </Box>
                        <TextField variant="outlined"
                                   margin={'dense'}
                                   label={translation.language["label.global.retype.password"]}
                                   value={reTypeNewPassword}
                                   onChange={(e) => setReTypePassword(e.target.value)}
                                   type={'password'}
                        />
                    </Box>:null
                }


                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p></p>
                    </Box>
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
                </Box>
            </Container>
        </Fragment>
    )
}

export default Data