// THIS IS OUR DROPDOWN COMPONENT

import React from "react";
import styles from './Dropdown.module.css'


class Dropdown extends React.Component {

    constructor() {
        super();
        this.state = {

            showList: false,
        }
    }

    // 'handleMouseHover' function is to handle hover event and makes showList = true
    handleMouseHover = () => {
        this.setState(
            {
                showList: true
            }
        )
    }


    // 'showList' function is to make showList = false after the list is visible and ony option from list is clicked
    showList = () => {

        this.setState(
            {
                showList: false
            }
        )
    }


    // 'listElements' is the array which contains elements of are dropdown list
    listElements = ["BMW", "Honda", "Ford", "Nissan", "Tesla", "Toyota", "Lamborghini"];




    render() {

        return (
            <>

                <div className={styles.outerContainer}>

                    <div className={styles.heading}>
                        <h1>React-Dropdown</h1>
                    </div>

                    <div className={styles.innerContainer}>

                        <div className={styles.textArea}>

                            <div className={styles.searchBox}>
                                select one
                            </div>


                            {/* here we have 'onMouseEnter' as we have 'onClick'. we do not have 'onHover' event in React so we have used
                            'onMounseEnter' which activates when mouse pointer enters the component */}
                            <div onMouseEnter={this.handleMouseHover}>
                                < img className={styles.downArrow} src="https://cdn-icons-png.flaticon.com/512/10017/10017905.png" />
                            </div>

                        </div>


                            {/* here we have used inline styling to set visibility of our list according to the condition and used ternary operator */}
                        <div className={styles.listContent} style={{ visibility: this.state.showList ? "visible" : "hidden" }} onClick={this.showList}>

                            {this.listElements.map((item, index) => <div key={index} className={styles.element}>{item}</div>)}

                        </div>

                    </div>

                </div>
            </>
        )
    }
}



export default Dropdown;