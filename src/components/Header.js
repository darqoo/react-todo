import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import 'typeface-roboto'

const style = {
  header: {
    marginBottom: 20,
  }
}

class Header extends Component {

  time = {
    dayNo: '',
    dayName: '',
    monthName: '',
    year: ''
  }

  componentWillMount() {
    this.myTime();
  }

  myTime = () => {
    let date = new Date();
    let dayName = date.toString().split(' ')[0];
    let monthName = date.toString().split(' ')[1];
    let dayNo = date.toString().split(' ')[2];
    let year = date.toString().split(' ')[3].slice(2);
    switch (dayName) {
      case 'Mon':
        dayName = 'Monday'
        break;
      case 'Tue':
        dayName = 'Thuesday'
        break;
      case 'Wed':
        dayName = 'Wednesday'
        break;
      case 'Thu':
        dayName = 'Thursday'
        break;
      case 'Fri':
        dayName = 'Friday'
        break;
      case 'Sat':
        dayName = 'Saturday'
        break;
      case 'Sun':
        dayName = 'Sunday'
        break;
      default:
    }
    switch (monthName) {
      case 'Jan':
        monthName = 'January'
        break;
      case 'Feb':
        monthName = 'February'
        break;
      case 'Mar':
        monthName = 'March'
        break;
      case 'Apr':
        monthName = 'April'
        break;
      case 'May':
        monthName = 'May'
        break;
      case 'Jun':
        monthName = 'June'
        break;
      case 'Jul':
        monthName = 'July'
        break;
      case 'Aug':
        monthName = 'August'
        break;
      case 'Sep':
        monthName = 'September'
        break;
      case 'Oct':
        monthName = 'October'
        break;
      case 'Nov':
        monthName = 'November'
        break;
      case 'Dec':
        monthName = 'December'
        break;
      default:
    }
    if (dayNo === '1') {
      dayNo += 'st'
    } else if (dayNo === '2') {
      dayNo += 'nd'
    } else if (dayNo === '3') {
      dayNo += 'rd'
    } else {
      dayNo += 'th'
    }

    return (
      this.time.dayNo = dayNo,
      this.time.dayName = dayName,
      this.time.monthName = monthName,
      this.time.year = year
    )
  }

render() {
  return (
    <Grid container className="header">
      <Grid item xs style={style.header}>
        <Typography type="display1" spaceing="24">
          {`${this.time.dayName}, ${this.time.dayNo}`}
        </Typography>
        <Typography type="headline">
          {`${this.time.monthName}'${this.time.year}`}
        </Typography>
      </Grid>
    </Grid>
  )
}
}

export default Header;
