import styled from 'styled-components'
export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
    padding-top: 30px;
`
export const HomeLeft = styled.div`
    float:left;
    width:625px;
    margin-left: 15px;
	
    .banner-img {
        cursor:pointer;
		width: 625px;
		height: 270px;
	}
`
export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
        cursor:pointer;
        display: block;
        width: 105px;
        height: 80px;
        float: right;
        border-radius: 10px;
	}
`;

export const ListInfo =	styled.div`
	width: 500px;
    float: left;
	.title{
        cursor:pointer;
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
    }
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const HomeRight = styled.div`
    width:280px;
    float:right;
`
export const RecommendWrapper = styled.div`
    width: 280px;
`
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    cursor:pointer;
	background: url(${(props) => props.imgUrl});
    background-size: contain;
    margin-bottom:6px;
`
export const AdWrapper = styled.a`
    display:block;
    cursor:pointer;
    height:82px;
    width:280px;
    padding: 10px 22px;
    box-sizing:border-box;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    margin-bottom: 30px;
    margin-top:10px;
    position:relative;
    .ad-img{
        width:60px;
        height:60px;
        float:left;
    }
`
export const AdInfo = styled.div`
    position: absolute;
    right: 24px;
    padding: 15px;
    .desc{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
    .title{
        font-size: 15px;
        color: #333;
        padding-bottom:6px;
    }

`
export const WriterWrapper = styled.div`
    width:280px;
`
export const WriterTitle = styled.span`
    font-size: 14px;
    color: #969696;
`
export const WriterItem = styled.div`
    margin-top: 15px;
    height:49px;
    position:relative;
`
export const WriterSwitch = styled.div`
    float: right;
    font-size: 13px;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    color: #969696;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`
export const WriterInfo = styled.div`
    display:block;
    
    .avatar-img{
        height:48px;
        width:48px;
        float:left;
        cursor:pointer;
        border: 1px solid #ddd;
        border-radius: 48px;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    
`
export const WriterName = styled.a`
    margin-left: 12px;
    float:left;
    cursor:pointer;
    padding-top: 8px;
    margin-right: 60px;
    font-size: 14px;
    color: #333;
    cursor: pointer;
`
export const WriterDesc = styled.p`
    margin-left: 12px;
    float:left;
    margin-top: 11px;
    font-size: 12px;
    color: #969696;
`
export const WriterFocus = styled.div`
    float: right;
    cursor:pointer;
    position: absolute;
    right: 0;
    top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
`
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align:center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`
export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    cursor:pointer;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
`