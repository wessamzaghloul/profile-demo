import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import classes from "./ProfileMain.module.scss";

const ProfileMain = ({
  src,
  name,
  about,
  setIsEditOpen,
  isEditOpen,
  exitEdit
}) => (
  <div className={classes.root}>
    <Paper className={classes.profileMain} square>
      <div className={classes.imgContainer}>
        <img src={src} alt={name} className={classes.image} />
      </div>
      <div className={classes.infoContainer}>
        <Typography component="p" className={classes.info}>
          Welcome, {name}
        </Typography>
        <Typography component="p" className={classes.bio}>
          {about}
        </Typography>
      </div>
      <div className={classes.btnContainer}>
        {isEditOpen ? (
          <Button
            variant="contained"
            fullWidth
            className={classes.discard}
            onClick={() => exitEdit()}
          >
            Exit Edit
          </Button>
        ) : (
          <Button
            variant="contained"
            fullWidth
            className={classes.action}
            onClick={() => setIsEditOpen(true)}
          >
            Edit Profile
          </Button>
        )}
      </div>
    </Paper>
  </div>
);

ProfileMain.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
  setIsEditOpen: PropTypes.func.isRequired,
  isEditOpen: PropTypes.bool.isRequired,
  exitEdit: PropTypes.func.isRequired
};

ProfileMain.defaultProps = {
  src: null,
  name: null,
  bio: null,
  setIsEditOpen: () => console.info("set edit"),
  isEditOpen: false,
  exitEdit: () => console.info("exit edit")
};

export default ProfileMain;
