package studios.spinningDiscs;

public interface OpticalDisc {
    //both spin
    void spinDisc();

    //both store data
    void storeData (String data);

    //both have a limited capacity
    boolean isFull();
}
