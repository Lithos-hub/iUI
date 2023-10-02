import { render } from '@testing-library/vue';
import IuiAlert from './iui-alert.vue';
import { nextTick } from 'vue';

const getRender = (props = {}) => render(IuiAlert, {
        props,
    });

describe('Given iui-alert component', () => {
    describe('When open is true', () => {
        it('Then it should has the alert__wrapper--opened class', () => {
            const { getByTestId } = getRender({
                open: true,
            });
            nextTick(() => {
                const alert = getByTestId('iui-alert__wrapper');
                console.log('CLASSES => ', alert.getAttribute('class'));
                expect(alert.getAttribute('class')).toContain('alert__wrapper--opened');
            })
        });
    })
    
    describe('When open is false', () => {
        it('Then it should has the alert__wrapper--closed class', () => {
            const { getByTestId } = getRender({
                open: false,
            });
            const alert = getByTestId('iui-alert__wrapper');
            nextTick(() => {
                expect(alert.getAttribute('class')).toContain('alert__wrapper--closed');
            })
        });
    })

    describe('When no type prop is provided', () => {
        it('Then it should render the default alert type', () => {
            const { getByTestId } = getRender();
            const alert = getByTestId('iui-alert');
            expect(alert.getAttribute('class')).toContain('alert__default');
        });
    });
    

    describe('When it is rendered with a title', () => {
        it('Then it should render the title', () => {
            const { getByText } = getRender({
                title: 'Test title',
            });
            getByText('Test title');
        });
    });

    describe('When it is rendered with a message', () => {
        it('Then it should render the message', () => {
            const { getByText } = getRender({
                message: 'Test message',
            });
            getByText('Test message');
        });
    });

    describe('When it is rendered with a title and message', () => {
        it('Then it should render the title and message', () => {
            const { getByText } = getRender({
                title: 'Test title',
                message: 'Test message',
            });
            getByText('Test title');
            getByText('Test message');
        });
    });
});