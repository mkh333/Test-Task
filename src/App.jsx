import Button from './components/Button';
import Dropdown from "./Components/Dropdown";
import Empty from './components/Empty';
import Collapse from './components/Collapse';
import Tabs from './components/Tabs';
import Notification from './components/Notification';
import Spin from './components/Spin';
import Drawer from './components/Drawer';
import Modal from './components/Modal';
import Form from './components/Form';

function App() {
    const handleClick = () => {
        alert('Button clicked');
    };

    const handleSubmit = (value) => {
        alert('Submitted: ' + value);
    };

    const tabsItems = [
        { key: 'tab1', label: 'Tab 1', content: <div>Tab One</div> },
        { key: 'tab2', label: 'Tab 2', content: <div>Tab Two</div> },
        { key: 'tab3', label: 'Tab 3', content: <div>Tab Three</div> },
    ];

    const dropdownItems = [
        { label: 'Option 1', onClick: handleClick},
        { label: 'Option 2', onClick: handleClick },
        { label: 'Option 3', onClick: handleClick },
    ];

    const panels = [
        { key: '1', header: 'Option 1', content: <p>Option 1</p> },
        { key: '2', header: 'Option 2', content: <p>Option 2</p> },
        { key: '3', header: 'Option 3', content: <p>Option 3</p> },
    ];

    return (
        <div className="App space-y-4 p-4">
            <Button type="primary" size="large" onClick={handleClick}>
                Button
            </Button>

            <Dropdown direction="bottom-left" trigger="click" items={dropdownItems}>
                <Button type="primary" size="medium">
                    Open Menu
                </Button>
            </Dropdown>

            <Empty message="No data available">
                <Button type="secondary" size="medium" onClick={handleClick}>
                    Add New
                </Button>
            </Empty>

            <Collapse items={panels}/>

            <Tabs items={tabsItems}/>

            <Notification type="success" title="Success" message="The operation was successful!"/>

            <Spin size="large" tip="Loading..."/>

            <Drawer width="small">
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            </Drawer>

            <Modal title="Delete task?" content="Are you sure?"/>

            <Form onSubmit={handleSubmit}>
                <input type="text" name="username" className="border px-3 py-2 w-full" placeholder="Enter your name"/>
                <Button type="primary" size="medium">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default App;