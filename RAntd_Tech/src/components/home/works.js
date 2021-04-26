import React from 'react';
import { Modal, Button } from 'antd';

class AppWorks extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>How it works</h2>
            <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
          </div>
          <div className="contentHolder">
            <Button onClick={this.showModal}>
              <i className="fas fa-play"></i>
            </Button>
          </div>
          <Modal 
            title="Hello ReactJS + Ant Design" 
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null} 
          >
            <iframe title="React JS #7 - Work on modal component" width="100%" height="350px" src="https://www.youtube.com/watch?v=DxNu1tVksqM&list=PLiUrl-SQRR7LM5cw7azA2H_FZwFx2UgkI&index=8"></iframe>
          </Modal>
        </div>
      </div>
    )
  }
}

export default AppWorks;