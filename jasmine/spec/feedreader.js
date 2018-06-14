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
         * have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('should toggle the visibility when clicked', function () {
            menu.trigger('click');
            // should be visible
            expect(body.hasClass('menu-hidden')).toBe(false);
            menu.trigger('click');
            // should be hidden
            expect(body.hasClass('menu-hidden')).toBe(true);
        })

        /* Test that ensure that the Handlebars
         * template far menu items is parsed well
         */
        describe('items', function () {
            it('should show the correct information', function () {
                const item = {
                    id: 1,
                    name: 'A feed name for testing.'
                }

                const feedItemTemplate = Handlebars.compile($('.tpl-feed-list-item').html());
                const text = feedItemTemplate(item);
                console.log(text);
                expect(text.includes('<a href="#" data-id="1">A feed name for testing.</a>')).toBe(true);
            })
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

        /* Test that ensure that the Handlebars
         * template far entries is parsed well
         */
        it('should show the correct information', function () {
            const feed = {
                title: 'A title for testing',
                link: 'http://udacity.com'
            }
            const entryTemplate = Handlebars.compile($('.tpl-entry').html());
            const text = entryTemplate(feed);
            console.log(text);
            expect(text.includes('<a class="entry-link" href="http://udacity.com">')).toBe(true);
            expect(text.includes('<h2>A title for testing</h2>')).toBe(true);
        })
    })

    /* A test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    describe('New Feed Selection', function () {
        var hrefBefore,
            hrefAfter;

        /* First we call the loadFeed with the first source feed of the allFeeds array
         * and save the URL of the first entry in the 'hrefBefore' variable.
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function (done) {
            loadFeed(0, function () {
                hrefBefore = $('.feed .entry-link').first().attr('href');
                done();
            })
        })

        /* Here we load a new feed calling loadFeed with the second source
         * feed, grab the URL of the first entry in hrefAfter and we expect
         * that it is different to hrefBefore, so thare is a new feed
         */
        it('should change with a new source feed', function (done) {
            // loadFeed(0, function () { testing....
            loadFeed(1, function () {
                hrefAfter = $('.feed .entry-link').first().attr('href');
                expect(hrefBefore).not.toEqual(hrefAfter);
                done();
            })
        })

        // load the default feed after testing
        afterEach(function () {
            loadFeed(0);
        })
    })
}());
