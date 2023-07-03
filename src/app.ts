import express from 'express';
import todoRoutes from './routes';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import mongoose from 'mongoose';



const app = express();
const PORT = 3000;


app.use(express.json());
app.use(todoRoutes);

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Todo API',
        description: 'API documentation for the Todo app',
        version: '1.0.0',
      },
    },
    apis: ['./src/routes/index.ts'],
  };
  
  const swaggerSpec = swaggerJsDoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
  app.listen(PORT, async () => {
    try {
      // Connect to MongoDB
     (await mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/todos'))
      // Initialize the 'todos' collection
      ,{  useNewUrlParser: true,
        useUnifiedTopology: true,}
      
      
     
  
      // Start the server
      console.log(`Server is running on port ${PORT}`);
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
    }
  });
  