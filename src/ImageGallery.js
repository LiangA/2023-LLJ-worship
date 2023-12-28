import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, Typography } from '@mui/material';

const ImageGallery = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT');
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  const handleFetchRandomImage = () => {
    fetchRandomImage();
  };

  const handleDownloadImage = () => {
    // 在這裡實現下載圖片的邏輯
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          圖片展示應用
        </Typography>
        <Button variant="contained" onClick={handleFetchRandomImage}>
          抽取
        </Button>
        {imageUrl && (
          <div>
            <img src={imageUrl} alt="Random Image" style={{ maxWidth: '100%', marginTop: '16px' }} />
            <Button variant="contained" onClick={handleDownloadImage} style={{ marginTop: '16px' }}>
              下載
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageGallery;
