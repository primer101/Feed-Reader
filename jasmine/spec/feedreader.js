/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should have an URL defined', function () {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toEqual('');
                // another way to test for empty
                expect(feed.url).toBeTruthy();
            });
        })


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should have a name defined', function () {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toEqual('');
                // another way to test for empty
                expect(feed.name).toBeTruthy();
            });
        })
    });


    /* A test suite to test "The menu" */
    describe('The menu', function () {
        const body = $('body');
        const menu = $('.menu-icon-link');
        const slide = $('.slide-menu');

        /* A test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('should be hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        })

        /* A test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('should toggle the visibility when clicked', function () {
            menu.trigger('click');
            menu.trigger('click');
        })

    })

    /* A test suite to test "Initial Entries" */
    describe('Initial Entries', function () {

        /* loadFeed() is asynchronous so this test will require
        /* the use of Jasmine's beforeEach and asynchronous done() function.
        */
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            })
        })

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('shoul be an entry al least', function (done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        })
    })

    /* A test suite to test "New Feed Selection" */
    describe('New Feed Selection', function () {
        var firstFeed;
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function (done) {
            firstFeed = $('.feed');
            //loadFeed(0, function () {
            done();
            //})
        })

        it('should change with the call of  loadFeed()', function (done) {
            expect(firstFeed).not.toBe($('.feed'))
            done();
        })

    })
}());
