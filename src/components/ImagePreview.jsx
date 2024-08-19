import React from 'react';
import Image from 'next/image';
import styles from './imagepreview.module.css'

const ImagePreview =({images})=> {
    return (
        <div>
            <div className={styles.imagegrid}>
                {images.map((image) => {
                    const src = URL.createObjectURL(image);
                    return(
                        <div className={styles.imageholder} key={image.name}>
                            <Image src={src} alt='image.name' className={styles.image} fill />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ImagePreview;