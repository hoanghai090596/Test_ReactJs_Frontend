import React from "react";

class ChildComponent extends React.Component {
  render() {
    console.log("ChildComponent props", this.props);
    let { name, salary, def, isShow } = this.props;

    return (
      <React.Fragment>
        {isShow && (
          <div className="jobList">
            {def.map((item, indext) => {
              return (
                <div key={item.id}>
                  {indext} - {item.id} - {item.title}
                </div>
              );
            })}
            <h4>
              Đến: {name} - {salary}
            </h4>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ChildComponent;
