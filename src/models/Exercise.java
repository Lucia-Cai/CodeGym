/*PLEASE DO NOT EDIT THIS CODE*/
/*This code was generated using the UMPLE 1.35.0.7523.c616a4dce modeling language!*/

package models;

// line 9 "../CodeGym.ump"
public class Exercise
{

  //------------------------
  // MEMBER VARIABLES
  //------------------------

  //Exercise Attributes
  private String name;
  private int reps;

  //Exercise Associations
  private WorkoutPlan workoutPlan;

  //------------------------
  // CONSTRUCTOR
  //------------------------

  public Exercise(String aName, int aReps, WorkoutPlan aWorkoutPlan)
  {
    name = aName;
    reps = aReps;
    boolean didAddWorkoutPlan = setWorkoutPlan(aWorkoutPlan);
    if (!didAddWorkoutPlan)
    {
      throw new RuntimeException("Unable to create exercise due to workoutPlan. See https://manual.umple.org?RE002ViolationofAssociationMultiplicity.html");
    }
  }

  //------------------------
  // INTERFACE
  //------------------------

  public boolean setName(String aName)
  {
    boolean wasSet = false;
    name = aName;
    wasSet = true;
    return wasSet;
  }

  public boolean setReps(int aReps)
  {
    boolean wasSet = false;
    reps = aReps;
    wasSet = true;
    return wasSet;
  }

  public String getName()
  {
    return name;
  }

  public int getReps()
  {
    return reps;
  }
  /* Code from template association_GetOne */
  public WorkoutPlan getWorkoutPlan()
  {
    return workoutPlan;
  }
  /* Code from template association_SetOneToMany */
  public boolean setWorkoutPlan(WorkoutPlan aWorkoutPlan)
  {
    boolean wasSet = false;
    if (aWorkoutPlan == null)
    {
      return wasSet;
    }

    WorkoutPlan existingWorkoutPlan = workoutPlan;
    workoutPlan = aWorkoutPlan;
    if (existingWorkoutPlan != null && !existingWorkoutPlan.equals(aWorkoutPlan))
    {
      existingWorkoutPlan.removeExercise(this);
    }
    workoutPlan.addExercise(this);
    wasSet = true;
    return wasSet;
  }

  public void delete()
  {
    WorkoutPlan placeholderWorkoutPlan = workoutPlan;
    this.workoutPlan = null;
    if(placeholderWorkoutPlan != null)
    {
      placeholderWorkoutPlan.removeExercise(this);
    }
  }


  public String toString()
  {
    return super.toString() + "["+
            "name" + ":" + getName()+ "," +
            "reps" + ":" + getReps()+ "]" + System.getProperties().getProperty("line.separator") +
            "  " + "workoutPlan = "+(getWorkoutPlan()!=null?Integer.toHexString(System.identityHashCode(getWorkoutPlan())):"null");
  }
}