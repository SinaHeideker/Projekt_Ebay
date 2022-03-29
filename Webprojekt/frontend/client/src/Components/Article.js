import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';

function Article({article}) {

  const [image, setImage] = useState("");

  useEffect(() => {
    const getImage = async () => {
      const config = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      };

      try {
        const imagePath = article.productImage.replace("uploads/", "")
        fetch(`http://localhost:1337/article/images/${imagePath}`, config)
          .then(response => response.blob())
          .then(imageBlob => {
            // Then create a local URL for that image and print it
            setImage(URL.createObjectURL(imageBlob));
          });


      } catch (error) {
        console.log(error);
      }
    };
    getImage();
  }, []);

  return (

    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="img"
        image={image}
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {article.title}
        </Typography>
        <Typography>
          {article.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Bieten</Button>
      </CardActions>
    </Card>


  );
}
export default Article;

