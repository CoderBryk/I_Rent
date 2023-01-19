import React, { PureComponent } from 'react';
import pt from 'prop-types';

import CanvasController from './CanvasController';

const wrapperStyles = { display: 'none' };

class ReactImageParser extends PureComponent {
    static propTypes = {
        img: pt.string.isRequired,
        maxImgSideSize: pt.number,
        onImageParsed: pt.func
    };

    static defaultProps = {
        img: null,
        onImageParsed: () => {}
    };

    constructor(...args) {
        super(...args);

        this.state = {
            imgElem: null,
            isImageParsed: false
        };
    }

    imageParsed = (data = []) => {
        this.props.onImageParsed({
            data,
            size: {
                width: this.state.imgElem.naturalWidth,
                height: this.state.imgElem.naturalHeight,
            }
        });

        this.setState({
            isImageParsed: true
        });
    };

    onImgLoad = e => {
        this.setState({
            imgElem: e.target
        });
    };

    onImgError = () => console.error(`react-image-parser: error on load image "${this.props.img}"`);

    render() {
        const {
            imgElem,
            isImageParsed
        } = this.state;
        const {
            img,
            maxImgSideSize,
            onImageParsed
        } = this.props;

        if (isImageParsed) {
            return null;
        }

        const shouldParseImage = typeof onImageParsed === 'function' && !!imgElem;

        return (
            <div style={wrapperStyles}>
                {shouldParseImage && <CanvasController
                    imgElem={imgElem}
                    sideSize={maxImgSideSize}
                    onImageData={this.imageParsed}
                />}
                {!imgElem && img && <img
                    src={img}
                    alt={'react-image-parser image'}
                    onLoad={this.onImgLoad}
                    onError={this.onImgError}
                />}
            </div>
        );
    }
}

export default ReactImageParser;