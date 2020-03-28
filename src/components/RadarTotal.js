import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer
} from 'recharts';

// const data = [
//   {
//     subject: 'Math', A: 120, B: 110, fullMark: 150,
//   },
//   {
//     subject: 'Chinese', A: 98, B: 130, fullMark: 150,
//   },
//   {
//     subject: 'English', A: 86, B: 130, fullMark: 150,
//   },
//   {
//     subject: 'Geography', A: 99, B: 100, fullMark: 150,
//   },
//   {
//     subject: 'Physics', A: 85, B: 90, fullMark: 150,
//   },
//   {
//     subject: 'History', A: 65, B: 85, fullMark: 150,
//   },
//   {
//     subject: 'Hiy', A: 35, B: 85, fullMark: 150,
//   },
// ];

//width={500} height={500}
//cx={300} cy={250}

//#8884d8


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';

  render() {
    return (
      <div>
      {this.props.title}
      <ResponsiveContainer width={'100%'} height={450} >
      <RadarChart outerRadius={180} data={this.props.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar name="cases" dataKey="value" stroke="#8884d8" fill="red" fillOpacity={0.6} />
          <Tooltip />
      </RadarChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
