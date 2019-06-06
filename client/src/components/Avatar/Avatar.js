ReactDOM.render(
    <div>
        <Image cloudName="demo" publicId="sample" width="300" crop="scale"/>
        // Or for more advanced usage:
        // import {CloudinaryContext, Transformation} from 'cloudinary-react';
        <CloudinaryContext cloudName="demo">
            <Image publicId="sample">
                <Transformation width="200" crop="scale" angle="10"/>
            </Image>
        </CloudinaryContext>
    </div>,
    document.getElementById('Avatar')
);