import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn(),
});

Enzyme.configure({
  adapter: new Adapter(),
});
