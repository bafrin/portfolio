import React from 'react'
import {shallow} from 'enzyme'
import ExampleWork,{ExampleWorkBubble} from '../js/example-work'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter:new Adapter()})
const myWork=[
  {
    'title':"Work Example",
    'image':{
      'desc':"example screenshot of a project involving code",
      'src':"images/example1.png",
      'comment':`“Chemistry” by Surian Soosay is licensed under CC BY 2.0
                  https://www.flickr.com/photos/ssoosay/4097410999`
    }
  }]
describe("ExapleWork Coponent", ()=>{
  let component = shallow(<ExampleWork work={myWork}/>)
  it("Should be a 'span' element",()=>{
    expect("Hello").toEqual("Hello")
    console.log(component.debug());
    expect(component.type()).toEqual('span')
  })
  it("should contain as many children as there are work examples",()=>{
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length)
  })
  it("should allow the modal to open and close",()=>{
    component.instance().openModal()
    expect(component.instance().state.modalOpen).toBe(true)
    component.instance().closeModal()
    expect(component.instance().state.modelOpen).toBe(false)
  })
})
describe("ExampleWorkBubble component",()=>{
  let mockOpenModalFn = jest.fn()
  let component=shallow(<ExampleWorkBubble example={myWork[0]}
    openModal={mockOpenModalFn} />)
  let images=component.find("img")
  it("should contain a single 'img' element", ()=>{
    expect(images.length).toEqual(1)
  })
  it("should HAVE THE IMG SRC SET CORRECTLY", ()=>{
    expect(images.getElement().props.src).toEqual(myWork[0].image.src)
    expect(images.prop('src')).toEqual(myWork[0].image.src)
  })
  it("should call the openModal handler when clicked", ()=>{
  component.find(".section__exampleWrapper").simulate('click')
  expect(mockOpenModalFn).toHaveBeenCalled()
})
})
