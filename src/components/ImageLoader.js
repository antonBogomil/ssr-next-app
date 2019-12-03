import React, {useEffect, useState} from 'react';
import {ApiService} from "../api";

const ImageLoader = ({productId, gallery, type = 'medium'}) => {
    const [img, setImg] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await ApiService.getImage({
                    product_id: productId,
                    type_image: type,
                    product_gallery_id: gallery
                },(data) =>{
                    console.log(data);
                } );
            }
            catch (e) {

            }
        };
        fetchData();
        // setImg(base);
    }, []);
    console.log(img);
    return (
        <div>
            <img src={img} alt={productId}/>
        </div>
    );
};

export default ImageLoader;