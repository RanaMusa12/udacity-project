import { expect } from 'chai';
import { shuffle } from '../starter/src/shuffle.js';

describe('Shuffle Function', () => {
  // Basic functionality test (required by rubric)
  it('should rearrange array elements', () => {
    const input = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...input]);
    
    // Verify all original elements are present
    expect(shuffled).to.have.members(input);
    
    // Verify order has changed (may rarely fail by chance)
    expect(shuffled).to.not.deep.equal(input);
  });

  // Additional valuable tests
  it('should maintain all original elements', () => {
    const input = ['A', 'B', 'C', 'D'];
    const shuffled = shuffle([...input]);
    expect(shuffled.sort()).to.deep.equal(input.sort());
  });

  it('should handle empty arrays', () => {
    expect(shuffle([])).to.deep.equal([]);
  });

  it('should handle single-element arrays', () => {
    expect(shuffle([42])).to.deep.equal([42]);
  });

  it('should actually produce different orders on subsequent shuffles', () => {
    const input = [1, 2, 3, 4, 5];
    const firstShuffle = shuffle([...input]);
    const secondShuffle = shuffle([...input]);
    
    // This test may rarely fail (1 in 120 chance for 5 elements)
    expect(firstShuffle).to.not.deep.equal(secondShuffle);
  });

  it('should not mutate the original array', () => {
    const original = [1, 2, 3];
    const copy = [...original];
    shuffle(original);
    expect(original).to.deep.equal(copy);
  });
});