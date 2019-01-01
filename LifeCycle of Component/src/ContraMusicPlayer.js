// import React, { Component } from 'react'
// import PlayHeader from 'svg-playhead'
// import Status from'status' 
//  import VolumeBar from'react-player-ui'
// import Highcharts from 'Highcharts'
// import SeekBar from 'react-player-ui';

// export default class ContraMusicPlayer extends Component {
 
 
//     constructor(props) {
//         super(props);
//         this.state = {
//           volume: 70,
//           status: 'pause'
//         }
//       }
//       ContraMusicPlayerdefaultProps = {
//         theme: 'dark'
//       };

//       componentDidMount() {
//         if (this.props.modules) {
//                    this.props.modules.forEach(function (module) {
//                        module(Highcharts);
//                    });
//                }
//                // Set container which the chart should render to.
//                this.chart = new Highcharts[this.props.type || "Chart"](
//                    this.props.container, 
//                    this.props.options
//                );
//        }
//        shouldComponentUpdate(nextProps, nextState) {
//         let shouldUpdate = this.props.status !== nextProps.status;
//         return shouldUpdate;
//       }
      
//       omponentWillReceiveProps(nextProps) {
//         if (this.props.status !== nextProps.status) {
//           this.setState({
//             status: nextProps.status
//           });
//         }
//       }
//       componentWillUnmount() {
//         this.chart.destroy();
//         this.resetLocalStorage();
//         this.clearSession();
//       }
//        render() {
//     return (
//       <div>
//            <div>
//      <PlayHeader>
//        <Status/>
//        <VolumeBar/>
//        <SeekBar/>
//     </PlayHeader>
//    </div>
        
//       </div>
//     )
//   }
// }
