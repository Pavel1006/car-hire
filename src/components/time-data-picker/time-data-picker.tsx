import React from "react";
import { useStyles } from "./time-data-picker-style";
import TextField from "@material-ui/core/TextField";
import Moment from "react-moment";

type DataAndTimePickerProps = {
  onDataAndTimePickerChange: (DateAndTime: string) => void;
  StartEndDate: string;
};
function DateAndTimePickers(props: DataAndTimePickerProps) {
  const classes = useStyles();
  const getCurrentDate = (separator = "-") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}T00:00`;
  };

  return (
    <form className={classes.container} noValidate>
      <TextField
        onChange={(event) =>
          props.onDataAndTimePickerChange(event.target.value)
        }
        type="datetime-local"
        label={props.StartEndDate}
        defaultValue={getCurrentDate}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
export { DateAndTimePickers };
