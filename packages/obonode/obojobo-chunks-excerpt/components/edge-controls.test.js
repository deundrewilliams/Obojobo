import EdgeControls from './edge-controls'
import renderer from 'react-test-renderer'
import React from 'react'
import { mount } from 'enzyme'

describe('Edge Controls', () => {
	const position = 'top'
	const edges = ['normal', 'fade']
	const selectedEdge = 'normal'
	const onChangeEdge = jest.fn()

	const defaultProps = {
		position,
		edges,
		selectedEdge,
		onChangeEdge
	}

	afterEach(() => {
		jest.clearAllMocks()
	})

	test('Node builds the expected component', () => {
		const component = renderer.create(<EdgeControls {...defaultProps} />)

		const tree = component.toJSON()

		expect(tree).toMatchSnapshot()
	})

	test('Node builds the expected component with no available edge options', () => {
		const props = {
			...defaultProps,
			edges: []
		}

		const component = renderer.create(<EdgeControls {...props} />)

		const tree = component.toJSON()

		expect(tree).toMatchSnapshot()
	})

	test('Node handles mousedown', () => {
		const component = mount(<EdgeControls {...defaultProps} />)

		component
			.find('label')
			.at(1)
			.simulate('mousedown')

		expect(onChangeEdge).toHaveBeenCalledWith(edges[1])
	})

	test('Node handles change', () => {
		const component = mount(<EdgeControls {...defaultProps} />)

		component
			.find('input')
			.at(1)
			.simulate('change')

		expect(onChangeEdge).toHaveBeenCalledWith(edges[1])
	})

	// test('Handles mouse down event', () => {

	//     const component = mount(
	//         <RadioIcons
	//             name="sizes"
	//             ariaLabel={ariaLabel}
	//             options={options}
	//             selectedOption={selectedOption}
	//             onChangeOption={onChange}
	//         />
	//     )

	//     // console.log(component.debug());

	//     component
	//     .find('label')
	//     .at(0)
	//     .simulate('mousedown')

	//     expect(onChange).toHaveBeenCalled()
	//     expect(onChange).toHaveBeenCalledWith('small')

	// })

	// test('Handles change event', () => {

	//     const component = mount(
	//         <RadioIcons
	//             name="sizes"
	//             ariaLabel={ariaLabel}
	//             options={options}
	//             selectedOption={selectedOption}
	//             onChangeOption={onChange}
	//         />
	//     )

	//     // console.log(component.debug());

	//     component
	//     .find('input')
	//     .at(0)
	//     .simulate('change')

	//     expect(onChange).toHaveBeenCalled()
	//     expect(onChange).toHaveBeenCalledWith('small')

	// })
})
