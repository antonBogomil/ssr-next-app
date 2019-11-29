import React, {useEffect,useState} from 'react';
import {ApiService} from "../api";

const ImageLoader = ({productId, gallery, type = 'medium'}) => {
    const [img, setImg] = useState('');
    useEffect(() => {
        const base = ApiService.getImage({
            product_id: productId,
            type_image: type,
            product_gallery_id: gallery
        });
        setImg(base);
    }, []);
    return (
        <div>
            <img src={img} alt={productId}/>
        </div>
    );
};

export default ImageLoader;