import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
    Button,
  } from "@mui/material";
  
  import React from "react";
  import { useNavigate } from "react-router-dom";
  import axios from "axios";
  
  const Blog = ({ title, description, imageURL, userName, isUser, id }) => {

    
    const navigate = useNavigate();
    const handleEdit = () => {
      navigate(`/myBlogs/${id}`);
    }
    

    const handleDelete = async () => {
      try{
        await axios.delete(`https://blogapp1306.herokuapp.com/api/blog/${id}`);
        window.location.replace("/blogs"); 
      }catch(err){};
      
    }
    
    return (
      
      <div>
        
        <Card
          sx={{
            width: "40%",
            margin: "auto",
            mt: 2,
            padding: 2,
            boxShadow: "5px 5px 10px #ccc",
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          
          <CardHeader
            avatar={  
              <Avatar
               
                sx={{ bgcolor: "red" }}
                aria-label="recipe"
              >
                {userName ? userName.charAt(0) : ""}
              </Avatar>
            }
            title={title}
          />
          <CardMedia
            component="img"
            height="194"
            image={imageURL}
            alt="Paella dish"
          />
  
          <CardContent>
            <hr />
            <br />
            <Typography
             
              variant="body2"
              color="text.secondary"
            >
              <b>{userName}</b> {": "} {description}
            </Typography>
          </CardContent>

          {isUser &&
            <Box display="flex" >
              <Button onClick={handleEdit} sx={{ marginLeft: "auto" }}>Edit</Button>
              
              <Button onClick={handleDelete}>Delete</Button>
    
            </Box>
  }
            
          
        </Card>
      
      </div>

    )
  
};
  
  export default Blog;
