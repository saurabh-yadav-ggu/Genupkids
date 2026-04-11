import { useNavigate } from 'react-router-dom';

/**
 * GameCard Component
 * Reusable card for displaying a game with title, description, image, and play button
 *
 * @param {Object} props
 * @param {string} props.title - Game title
 * @param {string} props.description - Game description
 * @param {string} props.image - Image URL
 * @param {string} props.route - Route to navigate to on play
 * @param {string} [props.badge] - Optional badge text (e.g., "NEW")
 * @param {string} [props.color] - Tailwind background color class
 * @param {string} [props.tilt] - Tailwind rotation class for visual interest
 */
const GameCard = ({
  title,
  description,
  image,
  route,
  badge,
  color = 'bg-primary/5',
  tilt = 'rotate-0',
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`group bg-surface-container-lowest rounded-xl p-6 shadow-[0px_12px_24px_-4px_rgba(44,47,48,0.08)] flex flex-col ${tilt} hover:rotate-0 transition-all duration-300`}
    >
      {/* Image Container */}
      <div className={`relative aspect-video mb-6 rounded-lg overflow-hidden ${color}`}>
        <img
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={image}
        />
        {badge && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-black rounded-full shadow-sm">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="font-display font-black text-2xl text-on-surface mb-2">
          {title}
        </h3>
        <p className="text-on-surface-variant font-medium mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Play Button */}
        <button
          onClick={() => navigate(route)}
          className="w-full bg-primary-container text-on-primary-container py-4 rounded-xl font-display font-black text-lg shadow-[0_4px_0_0_#004165] hover:shadow-none hover:translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          Play <span className="material-symbols-rounded">play_circle</span>
        </button>
      </div>
    </div>
  );
};

export default GameCard;
