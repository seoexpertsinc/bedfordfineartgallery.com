export const loadShortTestimonials = ($content) => {
    return loadTestimonials({ $content, shortOrLong: 'short' })
}

export const loadLongTestimonials = ($content) => {
    return loadTestimonials({ $content, shortOrLong: 'long' })
}

function loadTestimonials({ $content, shortOrLong }) {
    return $content('testimonials')
        .only(['name', `${shortOrLong}Testimonial`])
        .sortBy('name', 'asc')
        .fetch()
}
