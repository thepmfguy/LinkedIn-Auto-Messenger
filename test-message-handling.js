// Test script for LinkedIn message handling
const testConfig = {
    messageTemplate: 'Hi {name},\n\nThank you for applying to our position. We\'re currently reviewing applications and will get back to you soon.\n\nBest regards,\nYour Name',
    delayBetweenMessages: 1000,
    applicantLimit: 1,
    requireApproval: false
};

// Mock DOM elements
const mockElements = {
    messageBox: {
        innerHTML: '',
        textContent: '',
        innerText: '',
        focus: () => console.log('Focus called'),
        click: () => console.log('Click called'),
        dispatchEvent: (event) => console.log(`Event dispatched: ${event.type}`)
    },
    sendButton: {
        click: () => console.log('Send button clicked'),
        dispatchEvent: (event) => console.log(`Send button event: ${event.type}`)
    },
    form: {
        submit: () => console.log('Form submitted'),
        dispatchEvent: (event) => console.log(`Form event: ${event.type}`)
    }
};

// Test forceSetMessageContent
async function testForceSetMessageContent() {
    console.log('\n=== Testing forceSetMessageContent ===');
    const result = await forceSetMessageContent(mockElements.messageBox, 'Test message');
    console.log('Result:', result);
    console.log('Message box content:', mockElements.messageBox.innerHTML);
}

// Test forceSendMessage
async function testForceSendMessage() {
    console.log('\n=== Testing forceSendMessage ===');
    const result = await forceSendMessage(mockElements.sendButton);
    console.log('Result:', result);
}

// Test processApplicant
async function testProcessApplicant() {
    console.log('\n=== Testing processApplicant ===');
    const mockApplicant = {
        querySelector: () => ({
            textContent: 'Test Applicant',
            click: () => console.log('Applicant link clicked')
        })
    };
    
    const result = await processApplicant(mockApplicant);
    console.log('Result:', result);
}

// Run all tests
async function runTests() {
    console.log('Starting message handling tests...');
    
    try {
        await testForceSetMessageContent();
        await testForceSendMessage();
        await testProcessApplicant();
        
        console.log('\nAll tests completed successfully!');
    } catch (error) {
        console.error('Test failed:', error);
    }
}

// Run the tests
runTests(); 