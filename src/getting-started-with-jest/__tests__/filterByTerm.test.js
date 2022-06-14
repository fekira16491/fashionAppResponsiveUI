import Dashboard from "../../ui/Dashboard";
import * as dash from "../../ui/Dashboard";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { mount, shallow } from "enzyme";

let wrapper;
beforeEach(() => {
  wrapper = mount(<Dashboard />);
});

it("should render Dashboard comp", () => {
  expect(wrapper).toHaveLength(1);
});
describe("Given Dashboard comp", () => {
  // it('should take a snapshot', () => {

  //     // eslint-disable-next-line testing-library/no-debugging-utils
  //       const utils = render(<Dashboard />);

  //      // eslint-disable-next-line testing-library/no-debugging-utils
  //      console.log("wrapper",wrapper.debug());
  //      // eslint-disable-next-line testing-library/prefer-screen-queries
  //      // eslint-disable-next-line no-undef
  //     expect(wrapper).toHaveLength(1);
  //      // eslint-disable-next-line testing-library/prefer-screen-queries
  //      const filterButton = utils.getByTestId('filterButton').find('button').find('filterButton');;
  //      expect(filterButton).toEqual('Subscribe');

  //     //const incrementBtn = wrapper.find('filterButton');

  //     //expect(incrementBtn).();

  //     // incrementBtn.simulate('click');

  //      //expect(hello).toHaveBeenCalled();
  //     //const FakeFun = jest.spyOn(dash, 'filterByTerm');

  //     // const output = { id: 3, url: "https://www.link3.dev" };;

  //     // var jestFunc = jest.fn();
  //     // const incrementBtn = wrapper.find('button');
  //     // incrementBtn.simulate('click');
  //     // const filterButton = wrapper.find('button').find('#filterByTerm').
  //     // find('button');
  //     // filterButton.simulate('click');
  //     // expect(jestFunc).toHaveBeenCalled();
  //    // expect(FakeFun).toHaveBeenCalled();

  //     ///expect(text).toEqual('Subscribe');
  //   //  expect(incrementBtn).toHaveBeenCalledWith(jestFunc);
  //     //xpect(jestFunc).toHaveBeenCalled();

  // //     const utils = render(<Dashboard />);

  // //     const container = utils.getByTestId('title');
  // //     const container1 = utils.getByTestId("button')
  // //     expect(utils.getByText('Title Heading', container)).toBeTruthy();
  // // expect(container).
  // //     expect(onClick).toHaveBeenCalledTimes(1);

  //     // const wrapper = shallow(<Dashboard />);
  //     // const text = wrapper.find('p').text();

  // })
  // })
  // describe("filterByTerm",()=>{
  //     it("should return filterByTerm action obj",()=>{
  //     const input = [
  //         {id:1,url: "https://www.url1.dev"},
  //         {id:2,url:"https://www.url2.dev"},
  //         {id:3,url:"https://www.link3.dev"}
  //     ]
  //     const output = [{ id: 3, url: "https://www.link3.dev" }];

  //     const wrapper = mount(<Dashboard/>);
  //     const submitButton = wrapper.find('button');
  //     submitButton.simulate('click');
  //     expect(submitButton).toEqual(output);
  // })

  describe('when "filter button" is clicked', () => {
    it("should  call filter button click", () => {
        var obj ={id: 3, url: "https://www.link3.dev"} 

      const buttonElement = wrapper.find("#filterButton");
      expect(buttonElement.text()).toEqual("Subscribe");
      buttonElement.simulate("click");
    //   const text = wrapper.find('#filterCount');
    //   expect(text.text()).toEqual("1");
     let item = wrapper.find('option').at(0).instance().selected = false;
      wrapper.find('option').at(1).instance().selected = true;
      wrapper.find('select').simulate('change', {target: {value: 'https://www.url1.dev'}})

  // Then its value changes to 10:00
  expect(wrapper.find('select').props().value).toBe('https://www.url1.dev')
    //   expect(wrapper.find('select').props().value).toBe('10:00')

    // console.log("item",item)
      // expect(buttonElement).toHaveLength(1);

      //   render(<Dashboard />);
      //   const handleClick = jest.fn();
      //   wrapper
      // .find('button#filterButton')
      // .simulate('onClick',{keyCode: 27});
      //   const filterButton = screen.getByTestId("filterButton");
      //   const filterText = screen.getByText('Subscribe');
      //   console.log("filterText",filterText)
      //fireEvent.click(screen.getByText('Subscribe'))
      //expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
