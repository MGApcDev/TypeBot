'use strict';

describe('Paragraph utilities:', function () {

    beforeEach(function(done) {
        $('.unittest').remove(); // Remove existing tex documents
        $('body').append(__html__['fixtures/test1']);
        done();
    });

    describe('Get words of paragraph:', function () {
        it('Plain words', function () {
            expect(TypesetBot.paraUtils.getWords($('.plain').html()).length).toEqual(129);
        });
        it('Handle multiple space and html entity', function () {
            expect(TypesetBot.paraUtils.getWords($('.space').html()).length).toEqual(129);
            expect(TypesetBot.paraUtils.getWords($('.space').html()).length).toEqual(TypesetBot.paraUtils.getWords($('.plain').html()).length);
        });
    });

    describe('Get default space width:', function () {
        it('Normal font-size', function () {
            expect(TypesetBot.paraUtils.getDefaultSpaceWidth($('.plain'))).toBeLessThan(5);
            expect(TypesetBot.paraUtils.getDefaultSpaceWidth($('.plain'))).not.toBeLessThan(4);
        });
        it('Big font-size', function () {
            expect(TypesetBot.paraUtils.getDefaultSpaceWidth($('.big-font'))).toBeLessThan(9);
            expect(TypesetBot.paraUtils.getDefaultSpaceWidth($('.big-font'))).not.toBeLessThan(8);
            // Bigger font-size, bigger default space.
            expect(TypesetBot.paraUtils.getDefaultSpaceWidth($('.big-font'))).not.toBeLessThan(TypesetBot.paraUtils.getDefaultSpaceWidth($('.plain')));
        });
    });

    // describe('Set space width:', function () {
    //
    // });
});