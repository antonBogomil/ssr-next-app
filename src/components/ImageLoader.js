import React, {useEffect, useState} from 'react';
import {ApiService} from "../api";

const noImageSrc = 'https://icecat.biz/themes/basic/css/imgs/noimage.png';

const ImageLoader = ({productId, gallery, type = 'medium'}) => {
    const [img, setImg] = useState(noImageSrc);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await ApiService.getImage({
                    product_id: productId,
                    type_image: type,
                    product_gallery_id: gallery
                });
                setImg(res.data)
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <img src={img} alt={productId}/>
        </div>
    );
};

export default ImageLoader;