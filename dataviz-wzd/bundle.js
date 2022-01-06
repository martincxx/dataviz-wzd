(function (React, ReactDOM, d3) {
  'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

  const width = 960;
  const height = 500;
  const circleX = width / 2;
  const circleY = height / 2;
  const circleRadius = 30;

  const handleMouseMove = (event) => {
   const {clientX, clientY} = event;
    console.log(clientX, clientY);
  };

  const App = () => (
    React.createElement( 'svg', {
      width: width, height: height, onMouseMode: handleMouseMove },
      React.createElement( 'circle', { cx: circleX, cy: circleY, r: circleRadius })
    )
  );

  const rootElement = document.getElementById('root');
  ReactDOM.render(React.createElement( App, null ), rootElement);

}(React, ReactDOM, d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGFyYyB9IGZyb20gJ2QzJztcblxuY29uc3Qgd2lkdGggPSA5NjA7XG5jb25zdCBoZWlnaHQgPSA1MDA7XG5jb25zdCBjaXJjbGVYID0gd2lkdGggLyAyO1xuY29uc3QgY2lyY2xlWSA9IGhlaWdodCAvIDI7XG5jb25zdCBjaXJjbGVSYWRpdXMgPSAzMDtcblxuY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XG4gY29uc3Qge2NsaWVudFgsIGNsaWVudFl9ID0gZXZlbnQ7XG4gIGNvbnNvbGUubG9nKGNsaWVudFgsIGNsaWVudFkpO1xufTtcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRofVxuICAgIGhlaWdodD17aGVpZ2h0fVxuICAgIG9uTW91c2VNb2RlPXtoYW5kbGVNb3VzZU1vdmV9XG4gID5cbiAgICA8Y2lyY2xlIGN4PXtjaXJjbGVYfSBjeT17Y2lyY2xlWX0gcj17Y2lyY2xlUmFkaXVzfSAvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCByb290RWxlbWVudCk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0VBSUEsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0VBQ2xCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQztFQUNuQixNQUFNLE9BQU8sR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0VBQzFCLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7RUFDM0IsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3hCO0VBQ0EsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFLLEtBQUs7RUFDbkMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztFQUNsQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0VBQ2hDLENBQUMsQ0FBQztBQUNGO0VBQ0EsTUFBTSxHQUFHLEdBQUc7RUFDWixFQUFFO0VBQ0YsSUFBSSxPQUFPLEtBQU0sRUFDYixRQUFRLE1BQU8sRUFDZixhQUFhO0VBRWpCLElBQUksaUNBQVEsSUFBSSxPQUFRLEVBQUMsSUFBSSxPQUFRLEVBQUMsR0FBRyxjQUFhLENBQUc7RUFDekQsR0FBUTtFQUNSLENBQUMsQ0FBQztBQUNGO0VBQ0EsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNwRCxRQUFRLENBQUMsTUFBTSxDQUFDLHFCQUFDLFNBQUcsRUFBRyxFQUFFLFdBQVcsQ0FBQzs7OzsifQ==