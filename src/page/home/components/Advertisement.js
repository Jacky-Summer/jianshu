import React, { Component } from 'react';
import { AdWrapper,AdInfo } from '../styled'
class Advertisement extends Component {
    render() {
        return (
            <AdWrapper>
                <img alt='' className="ad-img" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"/>
                <AdInfo>
                    <div className="title">下载简书手机App&nbsp;&gt;</div>
                    <div className="desc">随时随地发现和创作内容</div>
                </AdInfo>
            </AdWrapper>
        );
    }
}

export default Advertisement;