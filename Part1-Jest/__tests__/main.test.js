const formatVolumeIconPath = require('../assets/scripts/main');

describe('Testing Level 0', () => {
    test('Only: Volume is 0', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });
});

describe('Testing Level 1', () => {
    test('Min: Volume is 1', () => {
        expect(formatVolumeIconPath(1)).toContain('1');
    });

    test('Mid: Volume is 17', () => {
        expect(formatVolumeIconPath(17)).toContain('1');
    });

    test('Max: Volume is 33', () => {
        expect(formatVolumeIconPath(33)).toContain('1');
    });
});

describe('Testing Level 2', () => {
    test('Min: Volume is 34', () => {
        expect(formatVolumeIconPath(34)).toContain('2');
    });

    test('Mid: Volume is 50', () => {
        expect(formatVolumeIconPath(50)).toContain('2');
    });

    test('Max: Volume is 66', () => {
        expect(formatVolumeIconPath(66)).toContain('2');
    });
});

describe('Testing Level 3', () => {
    test('Min: Volume is 67', () => {
        expect(formatVolumeIconPath(67)).toContain('3');
    });

    test('Mid: Volume is 83', () => {
        expect(formatVolumeIconPath(83)).toContain('3');
    });

    test('Max: Volume is 100', () => {
        expect(formatVolumeIconPath(100)).toContain('3');
    });
});
