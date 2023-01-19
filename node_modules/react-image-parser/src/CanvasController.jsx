import React, { PureComponent } from 'react';
import pt from 'prop-types';

class CanvasController extends PureComponent {
    static propTypes = {
        imgElem: pt.object.isRequired,
        sideSize: pt.number,
        onImageData: pt.func
    };

    static defaultProps = {
        onImageData: () => {}
    };

    componentDidMount() {
        this.getImageData();
    }

    getCanvasSideSizes() {
        const {
            imgElem: {
                naturalWidth: width,
                naturalHeight: height
            },
            sideSize = Math.max(width, height)
        } = this.props;
        const widthIsBigger = width > height;

        return {
            width: widthIsBigger ? sideSize : Math.ceil(sideSize * (width / height)),
            height: widthIsBigger ? Math.ceil(sideSize * (height / width)) : sideSize
        };
    }

    getImageData() {
        if (this.props.sideSize <= 0) {
            console.error('CanvasController: sideSize can\'t be lower or equal to zero!');

            return;
        }

        const { width, height } = this.getCanvasSideSizes();
        const ctx = this.canvas.getContext("2d");
        let imageData = [];

        this.canvas = Object.assign(this.canvas, { width, height });

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(this.props.imgElem, 0, 0, width, height);

        try {
            imageData = ctx.getImageData(0, 0, width, height).data;
        } catch (e) {
            console.error('CanvasController: catch error on getImageData!', e);
        }

        this.props.onImageData(imageData);
    }

    render() {
        return <canvas ref={canvas => this.canvas = canvas} />;
    }
}

export default CanvasController;