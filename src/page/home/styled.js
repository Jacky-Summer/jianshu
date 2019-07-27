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
		width: 625px;
		height: 270px;
	}
`
export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
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
	.title {
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
    width:240px;
    float:right;
`