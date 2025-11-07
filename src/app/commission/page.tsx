
import { CommissionForm } from './commission-form';

export const metadata = {
  title: 'Commission Artwork | Studio-H',
};

export default function CommissionPage() {
  return (
    <div className="container max-w-3xl px-4 md:px-6 py-12 md:py-20 mx-auto">
      <div className="animation-fade-in text-center">
        <h1 className="font-headline text-4xl md:text-6xl">Commission a Piece</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a unique idea? Let's collaborate to bring your vision to life. Fill out the form below to start the conversation.
        </p>
      </div>

      <div className="mt-12 animation-fade-in" style={{ animationDelay: '0.2s' }}>
        <CommissionForm />
      </div>
    </div>
  );
}
