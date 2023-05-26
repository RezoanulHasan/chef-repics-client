import React, { useState } from 'react';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import {  Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 20,
    height: '100%',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
  },
});



const Blog = () => {
  const [generatePDF, setGeneratePDF] = useState(false);
  
  const handlePDFDownload = () => {
    setGeneratePDF(true);
  }

  return (
    <>
      <div className="text-center">
        <button className="btn bg-black rounded-full text-pink-400 mt-2" onClick={handlePDFDownload}>
          Make it to PDF
        </button>
     
      <div className="mx-5 mt-5">
        {generatePDF && (
         <PDFDownloadLink
         document={<Document title="My Document" />}
         className="bg-black text-center center   text-pink-400 py-2 px-4 rounded-full inline-block download-link"
       >
         {({ blob, url, loading, error }) => (
           loading ? 'Generating PDF...' : 'Download PDF'
         )}
       </PDFDownloadLink>
        )}
      </div>
      </div>
      <Document title="My Document">
        <PageComponent  width={500} height={700}   />
      </Document>
    </>
  );
};


  const PageComponent = ({ width, height }) => {
<Page size={[width, height]} style={styles.page}>
    <View style={styles.section}>
      <Text style={styles.text}>This is my PDF page</Text>
    </View>
  </Page>
    return (
      <Page>
       
    <div className='mx-5 mt-20 '>
             
             <h1 className='text-center font-bold text-3xl  mt-10 text-accent mb-9  hover:text-black  '>Question-Section  </h1>
             
             <div className='grid grid-col   mt-7 lg:grid-cols-2 gap-5 mb-5'>
                  <div className="card  w-50 bg-base-500 shadow-2xl">
               <div className="card-body">
               <h2 className="card-title text-accent text-xl"> Tell us the differences between uncontrolled and controlled components.

?  </h2>
<p className="text-lime-600">In React, components can be classified as either controlled or uncontrolled depending on how they handle user input.  </p>
                 <p>An uncontrolled component is a component where React manages the state internally. The value of the input field is managed by the browser, and React does not have control over it. In an uncontrolled component, we do not need to write any event handlers to update the value of the input field. Instead, we can simply retrieve the value of the input field using the ref attribute.</p>
            
             
                 <p > On the other hand, a controlled component is a component where React manages the state. The value of the input field is managed by React, and any changes to the value are handled through event handlers. In a controlled component, you need to define event handlers to update the value of the input field. </p>

                 <p className="text-lime-600"> The key difference between controlled and uncontrolled components is that controlled components provide a way to validate and manipulate user input before it is submitted, whereas uncontrolled components do not. Controlled components are also more flexible because they allow you to set the initial state of the input field, and provide a way to update the value of the input field in response to user input. </p>
                 <div className="card-actions justify-end">
              
                 </div>
               </div>
             </div>
             
              <div className="card   w-50 bg-base-500 shadow-2xl">
               <div className="card-body">
                 <h2 className="card-title text-accent  text-xl ">How to validate React props using PropTypes?</h2>
                 <p>React provides a PropTypes library that we can use to validate the props passed to your components. This library allows us to define the expected data types and values of your component's props and helps you catch errors early in the development process.</p> 
  
                 <p className="text-lime-600" >   Here are some of the common data types that you can validate using PropTypes:</p> 
             <p> PropTypes.string  </p>  <p> 
PropTypes.number</p> 
<p>PropTypes.bool</p> 
<p>PropTypes.array</p> 
<p>PropTypes.object</p> 
<p>PropTypes.func</p> 
<p>PropTypes.node</p> 
<p>PropTypes.element</p> 
<p>PropTypes.shape</p> 
<p>PropTypes.name </p>            
             
             <p className="text-lime-600">Using PropTypes to validate your props is a great way to catch errors early in the development process and ensure that your components receive the correct data types and values.</p>
             
                 <div className="card-actions justify-end">
              
                 </div>
               </div>
             </div>
             
             <div className="card  w-50 bg-base-500 shadow-2xl">
               <div className="card-body">
                 <h2 className="card-title  text-accent text-xl "> Tell us the difference between nodejs and express js. </h2>
                 <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code on the server-side, outside of a browser environment. It provides a runtime environment for executing JavaScript code and has built-in modules for handling file system operations, networking, and more.</p>
             <p>Express.js is a web application framework that runs on top of Node.js. It provides a set of tools and features for building web applications, such as routing, middleware, and template engines. It is designed to make it easier to build web applications by providing a simplified API for handling HTTP requests and responses.</p>

                 <p className="text-lime-600">  Here are some key differences between Node.js and Express.js:
                 </p> 
             <p>Node.js is a runtime environment for executing JavaScript code on the server-side, while Express.js is a web application framework that runs on top of Node.js.</p>
             <p>Node.js provides built-in modules for handling file system operations, networking, and more, while Express.js provides tools and features for building web applications, such as routing, middleware, and template engines.</p>
             <p>Node.js provides a low-level API for handling HTTP requests and responses, while Express.js provides a simplified API for handling HTTP requests and responses that is easier to use.</p>
             <p>Node.js is a platform for building a wide range of applications, while Express.js is specifically designed for building web applications.</p>
             
             <p className="text-lime-600">  In summary, Node.js is a runtime environment that allows us to run JavaScript code on the server-side, while Express.js is a web application framework that provides tools and features for building web applications on top of Node.js
                 </p>
                 <div className="card-actions justify-end">
              
                 </div>
               </div>
             </div>
             
             <div className="card   w-50  bg-base-100 shadow-2xl">
               <div className="card-body">
                 <h2 className="card-title text-accent text-xl">What is a custom hook, and why will you create a custom hook? ?</h2>
                 <p>
             
                 A custom hook is a JavaScript function that uses one or more of the built-in React hooks (such as useState, useEffect, useContext, etc.) and possibly other functions to create a new custom hook with a specific functionality. Custom hooks allow us to encapsulate and reuse logic between components in our React application, improving code organization and reducing code duplication.
                 </p>
                 <p className="text-lime-600"> Custom hooks are used when you have a piece of logic that needs to be shared across multiple components. By creating a custom hook, we can encapsulate this logic in a reusable function that can be easily used by any component that needs it. For example, we might create a custom hook that fetches data from an API, or a custom hook that sets up a WebSocket connection.
                 </p> 
                 <p>By creating custom hooks, we can modularize your code, keep our components more focused on their specific tasks, and make our code more reusable and easier to maintain</p>
                
                 <div className="card-actions justify-end">
              
                 </div>
               </div>
             </div>
             
             
             </div>
             
            </div>
      </Page>
    );
  };









export default Blog;