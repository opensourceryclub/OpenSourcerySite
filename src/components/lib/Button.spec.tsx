import React from "react"
import { ReactWrapper, mount } from "enzyme"
import { Button, LabeledButton } from "./Button"

describe("<Button />", () => {

    let mockFn: jest.Mock<any, any>
    const url = "https://opensourceryumd.com"
    let btn: ReactWrapper

    beforeAll(() => {
        mockFn = jest.fn()
    })

    beforeEach(() => {
        btn = mount(
            <Button url={url} onClick={mockFn} />
        )
    })

    afterEach(() => {
        mockFn.mockClear()
    })

    it("Should render without throwing any errors", () => {
        expect(btn).toBeDefined()
        expect(btn.exists()).toBeTruthy()
    })

    it("onClick should be called when an onclick even is emitted", () => {
        btn.simulate("click")
        expect(mockFn).toBeCalledTimes(1)
    })

    it("should contain the passed URL inside of an anchor tag", () => {
        const anchors = btn.find("a")
        expect(anchors).toHaveLength(1)

        const anchor = anchors.at(0)
        expect(anchor.props().href).toEqual(url)
    })
})

describe("<LabeledButton />", () => {

})
