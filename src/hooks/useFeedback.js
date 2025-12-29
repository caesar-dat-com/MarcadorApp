import { useEffect } from 'react';

// Stub for FeedBack to allow build processing
// Native modules for Sound/Haptics removed temporarily due to build conflict

export const useFeedback = () => {
    const trigger = (type = 'impactLight') => {
        console.log('Feedback triggered (Stub):', type);
    };

    const success = () => trigger('notificationSuccess');
    const error = () => trigger('notificationError');
    const light = () => trigger('impactLight');
    const medium = () => trigger('impactMedium');
    const heavy = () => trigger('impactHeavy');

    return { trigger, success, error, light, medium, heavy };
};
