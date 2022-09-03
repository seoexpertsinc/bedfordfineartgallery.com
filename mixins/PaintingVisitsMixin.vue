<script>
function treatAsUTC(date) {
    const result = new Date(date)
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset())
    return result
}

function daysBetween(startDate, endDate) {
    const millisecondsPerDay = 24 * 60 * 60 * 1000
    return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay
}

export default {
	data() {
		return {
			showModal: false,
		}
	},
    mounted() {
        // if visited more than three times, and not visited in last seven days
        const localStorage = window.localStorage
        const paintingViews = localStorage.paintingViews ? JSON.parse(localStorage.paintingViews) : {}

        const paintingPathname = window.location.pathname
        if (paintingViews.recentVisits === undefined) {
            paintingViews.recentVisits = []
        }
        paintingViews.recentVisits = paintingViews.recentVisits.filter(function (view) {
            return view.pathname !== paintingPathname
        })
        paintingViews.recentVisits.unshift({ pathname: paintingPathname, date: new Date() })

        const ymd = new Date().toISOString().split('T')[0]

        if (paintingViews[paintingPathname] === undefined) {
            paintingViews[paintingPathname] = {}
        }
        if (paintingViews[paintingPathname].visits === undefined) {
            paintingViews[paintingPathname].visits = {}
        }
        if (paintingViews[paintingPathname].visits[ymd] === undefined) {
            paintingViews[paintingPathname].visits[ymd] = []
        }
        paintingViews[paintingPathname].visits[ymd].push(new Date())

        if (
            Object.keys(paintingViews[paintingPathname].visits).length >= 4 &&
            daysBetween(paintingViews[paintingPathname].popupLastShown || new Date('1970-01-01'), new Date()) > 7
        ) {
			const $this = this
            setTimeout(function () {
            	paintingViews[paintingPathname].popupLastShown = new Date()
				$this.showModal = true
        		localStorage.paintingViews = JSON.stringify(paintingViews)
            }, 5000)
        } else {
        	localStorage.paintingViews = JSON.stringify(paintingViews)
		}
    },
}
</script>
