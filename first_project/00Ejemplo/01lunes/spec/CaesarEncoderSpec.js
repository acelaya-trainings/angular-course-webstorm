
describe('Caesar encoder', function () {
    var encoder;

    beforeEach(function () {
        encoder = new CaesarEncoder();
    });

    describe('Encoding strings', function () {
        it('should encode strings', function () {
            expect(encoder.encode('aaa', 1)).toBe('bbb');
            expect(encoder.encode('abcd', 5)).toBe('fghi');
        });

        it('should keep non-letter characters while encoding', function () {
            expect(encoder.encode('aa.a+', 1)).toBe('bb.b+');
            expect(encoder.encode('ab???cd', 5)).toBe('fg???hi');
        });

        it('should loop the letters', function () {
            expect(encoder.encode('zzz', 3)).toBe('ccc');
        });
    });

    describe('Decoding strings', function () {
        it('should decode strings', function () {
            expect(encoder.decode('bbb', 1)).toBe('aaa');
            expect(encoder.decode('fghi', 5)).toBe('abcd');
        });

        it('should keep non-letter characters while decoding', function () {
            expect(encoder.decode('bb.b+', 1)).toBe('aa.a+');
            expect(encoder.decode('fg???hi', 5)).toBe('ab???cd');
        });

        it('should loop the letters', function () {
            expect(encoder.decode('ccc', 4)).toBe('yyy');
        });
    });
});
