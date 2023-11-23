import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Questionnaire from "../Questionnaire2";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Questionnaire">
                <Questionnaire/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews