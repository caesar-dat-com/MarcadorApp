// Stub for FeedBack to allow build processing
// Native modules for Sound/Haptics removed temporarily due to build conflict

type FeedbackType =
    | 'impactLight'
    | 'impactMedium'
    | 'impactHeavy'
    | 'notificationSuccess'
    | 'notificationError';

export const useFeedback = () => {
    const trigger = (type: FeedbackType = 'impactLight') => {
        console.log('Feedback triggered (Stub):', type);
    };

    const success = () => trigger('notificationSuccess');
    const error = () => trigger('notificationError');
    const light = () => trigger('impactLight');
    const medium = () => trigger('impactMedium');
    const heavy = () => trigger('impactHeavy');

    return { trigger, success, error, light, medium, heavy };
};
