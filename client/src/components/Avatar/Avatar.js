import { Avatar } from "antd";

class Avatar extends Component {
    static contextType = UserContext;
  
    state = {
      id: "",
      profilePic: ""
    };
  
  
    render() {
      return (
      <UserContext.Consumer>
         {({user}) => (
        <div>
            <Image cloudName="demo" publicId="sample" width="300" crop="scale"/>
            // Or for more advanced usage:
            // import {CloudinaryContext, Transformation} from 'cloudinary-react';
            <CloudinaryContext cloudName="demo">
                <Image publicId="sample">
                    <Transformation width="200" crop="scale" angle="10"/>
                </Image>
            </CloudinaryContext>
        </div>
         )}
          </UserContext.Consumer>
      );
    }
  }
  
  export default Avatar;

ReactDOM.render(
  ,
    document.getElementById('Avatar')
);