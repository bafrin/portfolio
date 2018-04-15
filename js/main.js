import React from 'react'
import ReactDOM from 'react-dom'
import ExampleWork from './example-work.js'

const myWork=[
  {
    'title':"Work Example",
    'image':{
      'desc':"example screenshot of a project involving code",
      'src':"images/example1.png",
      'comment':`“Chemistry” by Surian Soosay is licensed under CC BY 2.0
                  https://www.flickr.com/photos/ssoosay/4097410999`
    }
  },
  {
    'title':"Portfolio Biolerplate",
    'image':{
      'desc':"a serverless portfolio",
      'src':"images/example2.png",
      'comment':""
    }
  }

]
ReactDOM.render(<ExampleWork work={myWork} />,document.getElementById("example-work"))
