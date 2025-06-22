import { expect } from 'chai';
import { shuffle } from '../src/scripts/shuffle.js';

describe('Shuffle Function', () => {
  it('should rearrange array elements', () => {
    const input = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...input]);
    
    // Check if all elements are still present
    expect(shuffled).to.have.members(input);
    
    // Check if the order has changed (this might rarely fail by chance)
    expect(shuffled).to.not.deep.equal(input);
  });
});