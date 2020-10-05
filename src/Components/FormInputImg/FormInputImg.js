import React, { useCallback } from 'react'
/* 
handleFileInput = (e) => {
    if (e.target.files.length) {
        const fileName = e.target.files[0].name
        const extension = fileName.substr(fileName.lastIndexOf('.') + 1)
        if (extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'svg' || extension === 'webp') {
            const sizeOfFile = ((e.target.files[0].size) / 1024) //size in KB
            if (sizeOfFile < 1024) {
                const reader = new FileReader()
                reader.addEventListener("load", () => {
                    this.setState({ profilePic: reader.result })
                })
                reader.readAsDataURL(e.target.files[0])
            } else {
                alert('file size must be lesser than 1 MB')
            }
        } else {
            alert('plz choose a valid image file')
        }
    }
} 
*/

const FormInputImg = React.forwardRef((props, ref) => (
    <input
        style={{ display: "none" }}
        onChange={(e) => props.handleChange(e)}
        type="file"
        name="img"
        ref={ref}
    />
)
)
export default FormInputImg
