// @ts-nocheck 

import { makeStyles, Container, Avatar, Typography, ImageList, ImageListItem, Theme, createStyles } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { FC } from 'react';

const useStyles = makeStyles<Theme>(theme =>
    createStyles({
        container: {
            paddingTop: theme.spacing(10),
            position: "sticky",
            top: 0,
            right: 0
        },
        title: {
            fontSize: "16px",
            color: "#333",
        },
    }));

const RightBar: FC = () => {
    const friendsAvatars = [
        { id: 1, src: "https://material-ui.com/static/images/avatar/1.jpg", alt: "Remy Sharp" },
        { id: 2, src: "https://material-ui.com/static/images/avatar/2.jpg", alt: "Travis Howard" },
        { id: 3, src: "https://material-ui.com/static/images/avatar/3.jpg", alt: "Cindy Baker" },
        { id: 4, src: "https://material-ui.com/static/images/avatar/4.jpg", alt: "Agnes Walker" },
        { id: 5, src: "https://material-ui.com/static/images/avatar/5.jpg", alt: "Trevor Henderson" }
    ]

    const images = [
        { id: 1, src: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format", alt: "my gallery" },
        { id: 2, src: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format", alt: "my gallery" },
        { id: 3, src: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format", alt: "my gallery" },
        { id: 4, src: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format", alt: "my gallery" },
        { id: 5, src: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format", alt: "my gallery" },
        { id: 6, src: "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701312990.jpg", alt: "my gallery" },
        { id: 7, src: "http://images6.fanpop.com/image/photos/41400000/amazing-sunset-photographs-greyswan618-41405529-1600-1000.jpg", alt: "my gallery" },
        { id: 8, src: "https://i.pinimg.com/originals/73/a4/51/73a4514cb61dbe836b403a50bb63cc70.jpg", alt: "my gallery" },
        { id: 9, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzS0IRO5I_tlDbIBb0k0_ydRL6FdDNbFu9WX7kr-7GE3UJ2XDugo1TpG-25xq22OuPVw&usqp=CAU", alt: "my gallery" },
    ]
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography className={classes.title}>Online Friends</Typography>
            <AvatarGroup max={7}>
                {
                    friendsAvatars.map((avatar, avatarIndex) => {
                        return (
                            <Avatar
                                key={avatarIndex}
                                alt={avatar.alt}
                                src={avatar.src}
                            />
                        )
                    })
                }
            </AvatarGroup>
            <Typography>Gallery</Typography>
            <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={100} className={classes.imageContainer}>
                {
                    images.map((image, imageIndex) => {
                        return (
                            <ImageListItem className={classes.images} key={imageIndex}>
                                <img
                                    key={imageIndex}
                                    src={image.src}
                                    alt={image.art}
                                />
                            </ImageListItem>
                        )
                    })
                }
            </ImageList>
        </Container>
    )
};


export default RightBar